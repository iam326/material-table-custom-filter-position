import React from 'react';
import MaterialTable from 'material-table';

const tableData = [
  {
    couponId: '0001',
    storeName: '秋葉原店',
    couponName: '日用品 お得クーポン',
    discountRate: 10,
    startDate: '2020-08-01',
    endDate: '2020-08-07',
  },
  {
    couponId: '0002',
    storeName: '浅草店',
    couponName: '酒類 お得クーポン',
    discountRate: 5,
    startDate: '2020-08-10',
    endDate: '2020-08-20',
  },
  {
    couponId: '0003',
    storeName: '秋葉原店',
    couponName: '食料品 お得クーポン',
    discountRate: 8,
    startDate: '2020-08-01',
    endDate: '2020-08-31',
  },
  {
    couponId: '0004',
    storeName: '浅草店',
    couponName: '日用品 お得クーポン',
    discountRate: 15,
    startDate: '2020-09-01',
    endDate: '2020-09-30',
  },
  {
    couponId: '0005',
    storeName: '秋葉原店',
    couponName: '全商品 お得クーポン',
    discountRate: 3,
    startDate: '2020-09-10',
    endDate: '2020-09-24',
  },
];

const DataTable: React.FC = () => {
  return (
    <MaterialTable
      options={{
        search: false,
        draggable: false,
        filtering: true,
        toolbar: false,
        showTitle: false,
      }}
      columns={[
        {
          title: 'クーポン ID',
          field: 'couponId',
          filtering: false,
        },
        { title: '店舗', field: 'storeName', filtering: false },
        {
          title: 'クーポン名',
          field: 'couponName',
        },
        {
          title: '割引率',
          field: 'discountRate',
          filtering: false,
          cellStyle: { textAlign: 'right' },
        },
        {
          title: '利用開始日',
          field: 'startDate',
          filtering: false,
          cellStyle: { textAlign: 'right' },
        },
        {
          title: '利用終了日',
          field: 'endDate',
          filtering: false,
          cellStyle: { textAlign: 'right' },
        },
      ]}
      data={tableData}
    />
  );
};

export default DataTable;
