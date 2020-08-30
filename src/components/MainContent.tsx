import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) => ({
  filters: {
    marginBottom: theme.spacing(2),
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

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

const MainContent: React.FC = () => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState<string>('');
  return (
    <>
      <Paper className={classes.filters}>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <TextField
              id="filter-coupon-name-text-field"
              label="クーポン名"
              value={filterValue}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>
        </form>
      </Paper>
      <MaterialTable
        options={{
          filtering: false,
          search: false,
          draggable: false,
          toolbar: false,
          showTitle: false,
        }}
        columns={[
          {
            title: 'クーポン ID',
            field: 'couponId',
          },
          { title: '店舗', field: 'storeName' },
          {
            title: 'クーポン名',
            field: 'couponName',
            defaultFilter: [],
            customFilterAndSearch: (
              _: string,
              rowData: { couponName: string }
            ) =>
              filterValue.length === 0 ||
              rowData.couponName.indexOf(filterValue) > -1,
          },
          {
            title: '割引率',
            field: 'discountRate',
            cellStyle: { textAlign: 'right' },
          },
          {
            title: '利用開始日',
            field: 'startDate',
            cellStyle: { textAlign: 'right' },
          },
          {
            title: '利用終了日',
            field: 'endDate',
            cellStyle: { textAlign: 'right' },
          },
        ]}
        data={tableData}
      />
    </>
  );
};

export default MainContent;
