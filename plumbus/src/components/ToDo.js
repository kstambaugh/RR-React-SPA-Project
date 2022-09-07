import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";


export const ToDoList = () => {
    return (
        <>
            <CardGroup>
                <Button>Add New Task</Button>{' '}
                <Card className="newItem">
                    <Card.Body>
                        <Card.Title>New Task</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="newItem">
                    <Card.Body>
                        <Card.Title>New Task</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="newItem">
                    <Card.Body>
                        <Card.Title>New Task</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="newItem">
                    <Card.Body>
                        <Card.Title>New Task</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>

        </>
    )
}