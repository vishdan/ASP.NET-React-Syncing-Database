import React from "react";
import { Table } from "reactstrap";
import {Movie} from "../models/movie.model"

const View = React.memo(function View(props: any) {
  const datas = props.location.state.data;
  const dataList = datas.map((data: Movie) => (
    <tr key={data.id}>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>{data.releaseDate}</td>
      <td>{data.genre}</td>
      <td>{data.price}</td>
    </tr>
  ));
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {dataList}
        </tbody>
      </Table>
    </>
  );
});

export default View;
