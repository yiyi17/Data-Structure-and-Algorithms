export default {
  'GET /api/v3/column': (req: any, res: any) => {
    res.json({
      isSuccess: true,
      message: '请求成功',
      data: [
        {
          id: 1,
          columnName: 'log_type',
          columnInfo: '日志类型',
          tags: [
            'Event',
            'Show',
            'Ping',
            'Player',
            'System',
            'BeginEnd',
            'Monitor',
            'ExpEvent',
          ],
          remark: '',
          creator: 'default',
          updater: 'default',
          createTime: 1655962210000,
          updateTime: 1663659228000,
        }
      ]
    })
  }
}