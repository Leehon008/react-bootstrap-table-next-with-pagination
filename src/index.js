import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ReactDOM from "react-dom";
import "./styles.css";

const ProductList = (props) => {
  const data = [
    {
      userId: 1,
      memo: "George paid this",
      debit: 1235,
      credit: 3344,
      date_created: "2020-02-03",
      balance: 900
    },
    {
      userId: 2,
      memo: "Jeffrey paid this",
      debit: 4566,
      credit: 7344,
      date_created: "2020-02-02",
      balance: 234
    },
    {
      userId: 3,
      memo: "Alice paid this",
      debit: 44322,
      credit: 5344,
      date_created: "2020-01-03",
      balance: 900
    },
    {
      userId: 4,
      memo: "Foster paid this",
      debit: 2343434,
      credit: 4344,
      date_created: "2020-12-03",
      balance: 900
    },
    {
      userId: 5,
      memo: "Tracy paid this",
      debit: 4777,
      credit: 1234,
      date_created: "2019-02-03",
      balance: 900
    },
    {
      userId: 6,
      memo: "Joesph paid this",
      debit: 88776,
      credit: 9000,
      date_created: "1980-02-03",
      balance: 900
    },
    {
      userId: 7,
      memo: "Tania paid this",
      debit: 9777,
      credit: 3344,
      date_created: "2020-02-03",
      balance: 900
    },
    {
      userId: 8,
      memo: "Chelsea paid this",
      debit: 98887,
      credit: 4563,
      date_created: "2020-09-03",
      balance: 900
    },
    {
      userId: 9,
      memo: "Benedict paid this",
      debit: 6755,
      credit: 3344,
      date_created: "2020-5-03",
      balance: 900
    },
    {
      userId: 10,
      memo: "Chadd paid this",
      debit: 5664,
      credit: 45663,
      date_created: "2020-4-03",
      balance: 900
    },
    {
      userId: 11,
      memo: "Delphine paid this",
      debit: 4333,
      credit: 34566,
      date_created: "2020-02-03",
      balance: 900
    },
    {
      userId: 12,
      memo: "Elinore paid this",
      debit: 45433,
      credit: 3344,
      date_created: "2020-3-03",
      balance: 0
    },
    {
      userId: 13,
      memo: "Stokes paid this",
      debit: 3432,
      credit: 445553,
      date_created: "2020-11-03",
      balance: 0
    },
    {
      userId: 14,
      memo: "Tamara paid this",
      debit: 2344,
      credit: 3344,
      date_created: "2020-02-03",
      balance: 0
    },
    {
      userId: 15,
      memo: "Zackery paid this",
      debit: 1123,
      credit: 56644,
      date_created: "2020-8-03",
      balance: 0
    }
  ];

  const columns = [
    {
      dataField: "date_created",
      text: "DATE",
      footer: "Closing Balance",
      sort: true
      // headerStyle: {
      //   backgroundColor: "#DEDADA"
      // }
    },
    {
      dataField: "memo",
      text: "MEMO",
      footer: "",
      sort: true
      // headerStyle: {
      //   backgroundColor: "#DEDADA"
      // }
    },
    {
      dataField: "debit",
      text: "DEBIT",
      // headerStyle: {
      //   backgroundColor: "#DEDADA"
      // },
      footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0)
    },
    {
      dataField: "credit",
      text: "CREDIT",
      // headerStyle: {
      //   textColor: "#c8e6c9"
      // },
      footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0)
    },
    {
      dataField: "balance",
      text: "BALANCE",
      // headerStyle: {
      //   backgroundColor: "#c8e6c9"
      // },
      footer: (columnData) => columnData.reduce((acc, item) => acc + item, 0)
    }
  ];

  const username = "TERRY CREWS";

  return (
    <div
      style={{
        padding: "5% 5%"
      }}
    >
      <div class="row">
        <div class="col-12 col-md-8">
          <h4 className="h4" style={{ color: "#00008B" }}>
            {username}
          </h4>
          <p style={{ color: "#00008B" }}>Customer Statement</p>
        </div>
        <div class="col-6 col-md-4">
          <p style={{ color: "#00008B" }}>
            Currency: &nbsp;&nbsp;
            <select style={{ backgroundColor: "#1E90FF" }}>
              <option value="USD">USD</option>
              <option value="ZWL">ZWL</option>
            </select>
          </p>

          <p style={{ color: "#00008B" }}>
            Dates: &nbsp;&nbsp;
            <select style={{ backgroundColor: "#1E90FF" }}>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 60 days">Last 60 days</option>
              <option value="Last 90 days">Last 90 days</option>
            </select>
          </p>
        </div>
      </div>

      <div style={{ color: "#4682B4" }}>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ProductList />, rootElement);
