import React from 'react';
import {Table} from 'reactstrap';
import uuid from "uuid";

    export function buildTable(allScansList) {
        let counter = 0;
        if (allScansList.length > 0) {
            console.log("Ran if statement to build table.");
            return (
                <Table style={{display: "inline-block"}} key={uuid.v4()}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>IP Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allScansList.map(ip => <tr key={counter}>
                        <th scope="row">{counter++}</th>
                        <td>{ip}</td>
                    </tr>)}
                    </tbody>
                </Table>
            )
        }
    }

