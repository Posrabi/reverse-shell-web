import React from "react";
import { Header, List } from "semantic-ui-react";

export const Status = ({statuses}) => { 
    return (
        <List>
            {statuses.map(status => {
                return (
                    <List.Item>
                        <Header>{status.status}</Header>
                    </List.Item>
                    )
            })}
        </List>
    )
}