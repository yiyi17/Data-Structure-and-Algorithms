import { useRequest } from '@umijs/max';
import { Button, Drawer, Form, Input, message, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect } from 'react';
import { ColumnItem } from '@/models/columns';
import { SEMATIC_TYPE, URLTYPE } from '../constants';
import { contentTypes, DRAWER_OPEN_TYPE } from '../typings';
import styles from './styles.less';

const FORM_ITEM_WIDTH = 350;

interface ContentDetailPropsTypes {
  setDetailDrawerVis: (visible: boolean) => void;
  detailDrawerVis: boolean;
  contentDetail: contentTypes;
  drawerOpenType: DRAWER_OPEN_TYPE | undefined;
  allColumns?: Array<ColumnItem>;
  contentTypeOptions: Array<{
    label: string;
    value: string;
    disabled: boolean;
  }>;
  reload: () => void;
  tableData: any;
}

const ContentDetail: React.FC<ContentDetailPropsTypes> = (
  props: ContentDetailPropsTypes,
) => {
  const {
    setDetailDrawerVis,
    detailDrawerVis,
    contentDetail,
    drawerOpenType,
    contentTypeOptions,
    reload,
  } = props;

  const [form] = Form.useForm();
  const isEdit = drawerOpenType === DRAWER_OPEN_TYPE.EDIT;
  const { run: createContentDetail } = useRequest(
    (contentDetail: contentTypes) => ({
      url: `/api/v3/parameter/content_type`,
      method: 'POST',
      data: {
        ...contentDetail,
      },
    }),
    {
      manual: true,
      onSuccess: () => {
        message.success('新建成功～');
        setDetailDrawerVis(false);
        reload();
      },
    },
  );
  const { run: editContentDetail } = useRequest(
    (data: contentTypes) => ({
      url: `/api/v3/parameter/content_type`,
      method: 'PUT',
      data: {
        id: contentDetail?.id,
        ...data,
      },
    }),
    {
      manual: true,
      onSuccess: () => {
        message.success('修改成功～');
        setDetailDrawerVis(false);
        reload();
      },
    },
  );

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        ...contentDetail,
      });
    }
    return () => {
      form.resetFields();
    };
  }, [contentDetail, drawerOpenType, detailDrawerVis]);

  const handleAddContent = () => {
    form
      .validateFields()
      .then((contentDetail: any) => {
        if (isEdit) {
          editContentDetail(contentDetail);
        } else {
          createContentDetail(contentDetail);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Drawer
      onClose={() => {
        setDetailDrawerVis(false);
      }}
      title={isEdit ? '编辑内容类型' : '添加内容类型'}
      open={detailDrawerVis}
      width={600}
      destroyOnClose
      footer={
        <>
          <Button
            onClick={() => {
              setDetailDrawerVis(false);
            }}
          >
            取消
          </Button>
          <Button
            onClick={handleAddContent}
            type="primary"
            className={styles.footerButton}
          >
            保存
          </Button>
        </>
      }
    >
      <Form form={form} labelCol={{ span: 6 }}>
        <Form.Item
          name="contentType"
          label="内容类型"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="请选择内容类型"
            style={{ width: FORM_ITEM_WIDTH }}
            showSearch
            disabled={isEdit}
            options={contentTypeOptions}
          />
        </Form.Item>
        <Form.Item
          name="contentName"
          label="中文名"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="请输入内容类型中文描述"
            style={{ width: FORM_ITEM_WIDTH }}
          />
        </Form.Item>
        <Form.Item
          name="urlType"
          label="url里上报id、token"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="请选择上报id、token"
            style={{ width: FORM_ITEM_WIDTH }}
            options={URLTYPE}
          />
        </Form.Item>
        <Form.Item
          name="semanticsType"
          label="埋点上报id/token"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="请选择上报id、token或者都上报"
            style={{ width: FORM_ITEM_WIDTH }}
            options={SEMATIC_TYPE}
          />
        </Form.Item>
        <Form.Item name="remark" label="备注">
          <TextArea
            style={{ width: FORM_ITEM_WIDTH }}
            placeholder="请输入备注"
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ContentDetail;
