
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRequest } from '@umijs/max';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

import Authorized from '@/components/Authorized';
import UseColumns from '@/models/columns';
import { makeListData } from './utils';
import { CONTENT_TYPE_NAME } from './constants';
import ContentDetail from './Detail';
import { contentTypes, DRAWER_OPEN_TYPE, ID_TOKEN } from './typings';

const ContentList = () => {
  const actionRef = useRef();
  const [detailDrawerVis, setDetailDrawerVis] = useState<boolean>(false);
  const [contentDetail, setContentDetail] = useState<contentTypes | any>({});
  const [drawerOpenType, setDrawerOpenType] = useState<DRAWER_OPEN_TYPE>();
  const [tableData, setTableData] = useState<Array<contentTypes>>([]);
  let [contentTypeOptions, setContentTypeOptions] = useState<
    Array<{
      label: string;
      value: string;
      disabled: boolean;
    }>
  >([]);

  const { run: getContentList } = useRequest<contentTypes[]>(
    (params: any) => {
      return {
        url: '/api/v3/parameter/content_type',
        method: 'GET',
        params,
      };
    },
    {
      manual: true,
    },
  );
  const { columns: allColumns } = UseColumns();

  const handleEdit = (record: contentTypes) => {
    setContentDetail(record);
    setDetailDrawerVis(true);
  };

  const getTableData = (data: Array<contentTypes>) => {
    setTableData(data);
  };

  useEffect(() => {
    const allContentType = tableData.map((item) => item.contentType);

    const contentTypeColumn = (allColumns as []).filter(
      (column: any) => column.columnName === CONTENT_TYPE_NAME,
    )?.[0];
    if (contentTypeColumn) {
      const contentTypeOptions = (contentTypeColumn as any).tags.map((item: any) => {
        const option = { label: item, value: item, disabled: false };
        if (allContentType.includes(item)) {
          option.disabled = true;
        }
        return option;
      });
      setContentTypeOptions(contentTypeOptions);
    }
  }, [tableData, allColumns]);

  const reload = () => {
    // @ts-ignore
    actionRef.current?.reload();
  };

  const columns: ProColumns[] = [
    {
      title: '内容类型',
      hideInTable: true,
      dataIndex: 'name',
      width: 300,
      fieldProps: { placeholder: '请输入内容类型中文名 / 英文名' },
    },
    {
      title: '内容类型',
      dataIndex: 'contentType',
      hideInSearch: true,
    },
    {
      title: '中文名',
      dataIndex: 'contentName',
      hideInSearch: true,
    },
    {
      title: 'url里上报id/token',
      dataIndex: 'urlType',
      hideInSearch: true,
      render: (v) => ID_TOKEN[v as number] || v,
    },
    {
      title: '上报id/token',
      dataIndex: 'semanticsType',
      hideInSearch: true,
      render: (v) => ID_TOKEN[v as number] || v,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      hideInSearch: true,
    },
    {
      title: '操作',
      hideInSearch: true,
      render: (_: any, record: any) => {
        return (
          <Authorized authority="ROLE_ADMIN">
            <Button
              type="link"
              onClick={() => {
                handleEdit(record);
                setDrawerOpenType(DRAWER_OPEN_TYPE.EDIT);
              }}
            >
              编辑
            </Button>
          </Authorized>
        );
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<contentTypes[]>
        headerTitle="内容管理列表"
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 50, 100],
        }}
        actionRef={actionRef}
        rowKey="id"
        request={makeListData(getContentList, getTableData)}
        columns={columns}
        search={{
          optionRender: false,
          collapsed: false,
        }}
        toolbar={{
          actions: [
            <Authorized authority="ROLE_ADMIN">
              <Button
                key="primary"
                type="primary"
                onClick={() => {
                  setDrawerOpenType(DRAWER_OPEN_TYPE.CREATE);
                  setContentDetail({});
                  setDetailDrawerVis(true);
                }}
              >
                添加内容类型
              </Button>
            </Authorized>,
          ],
        }}
      />
      <ContentDetail
        reload={reload}
        detailDrawerVis={detailDrawerVis}
        setDetailDrawerVis={setDetailDrawerVis}
        contentDetail={contentDetail}
        drawerOpenType={drawerOpenType}
        contentTypeOptions={contentTypeOptions}
        tableData={actionRef.current}
      />
    </PageContainer>
  );
};

export default ContentList;
