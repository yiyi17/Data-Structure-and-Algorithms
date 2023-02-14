import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRequest } from '@umijs/max';
import { Button, Card, Form, Input, message, Select } from 'antd';
import { useState } from 'react';

import { ROLE_CNAME } from '@/components/Authorized/constants';

type UserItem = {
  userId: string;
  display: string;
  role: string;
};

const Authority = () => {
  const [keyword, setKeyword] = useState('');
  const [form] = Form.useForm();
  const { run: edit, loading } = useRequest(
    (data) => {
      return {
        url: '/api/v1/update_role',
        method: 'PUT',
        data,
      };
    },
    { manual: true },
  );
  const {
    data: dataSource,
    loading: loadingUsers,
    run,
  } = useRequest<UserItem[]>('/api/v1/user_list');

  const updateUser = async () => {
    const values = await form.validateFields();
    await edit(values);
    form.resetFields();
    run();
    message.success('修改完成');
  };

  const columns: ProColumns[] = [
    { title: '用户 id', dataIndex: 'userId' },
    { title: '用户名称', dataIndex: 'display' },
    {
      title: '用户角色',
      dataIndex: 'role',
      render: (v, record: any) => {
        return ROLE_CNAME.get(record.role);
      },
    },
  ];

  const filteredData = dataSource?.filter((d) => {
    return `${d.userId}${d.display}${ROLE_CNAME.get(d.role)}`.includes(keyword);
  });

  return (
    <PageContainer>
      <Card title="设置用户角色">
        <Form layout="inline" form={form}>
          <Form.Item
            label="角色类型"
            name="role"
            required
            rules={[{ required: true, message: '请输入角色类型' }]}
          >
            <Select style={{ width: 260 }} placeholder="请选择角色类型">
              {Array.from(ROLE_CNAME).map(([value, label]) => {
                return (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="用户 ID"
            name="userId"
            required
            rules={[{ required: true, message: '请输入用户 ID' }]}
          >
            <Input
              style={{ width: 260 }}
              placeholder="请填写用户 ID，如：xxx"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              onClick={updateUser}
              className="float-right"
            >
              保存
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div className="mt24" />
      <Card className="full-card">
        <div className="table-toolbar">
          <div className="table-toolbar-title">用户列表</div>
          <Input.Search
            style={{ width: 260 }}
            placeholder="请输入用户id/名称/角色搜索"
            onSearch={(v) => {
              setKeyword(v);
            }}
            allowClear
          />
        </div>
        <ProTable
          columns={columns}
          dataSource={filteredData || []}
          size="middle"
          loading={loadingUsers}
          rowKey={(record) => record.userId}
          toolBarRender={false}
          search={false}
        />
      </Card>
    </PageContainer>
  );
};

export default Authority;
