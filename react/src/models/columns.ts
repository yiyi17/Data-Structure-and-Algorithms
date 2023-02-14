import { useRequest } from '@umijs/max';
import { createModel } from 'hox';
import { normalize, schema } from 'normalizr';

export type ColumnItem = {
  id: number;
  remark: string;
  columnName: string;
  columnInfo: string;
  creator: string;
  updater: string;
  createTime: string;
  updateTime: string;
  tags: Array<string>;
};

function Columns() {
  const { data, run, loading } = useRequest<ColumnItem[]>('/api/v3/column');

  const column = new schema.Entity('columns');
  const normalized = normalize(data || [], [column]);

  return {
    columns: data || [],
    normalizedColumns: normalized.entities.columns,
    updateColumns: run,
    loading,
  };
}

export default createModel(Columns);
