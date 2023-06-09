import React, { useState } from "react";
import { Button, CloseButton, Col, Form, Row } from "react-bootstrap";

export const PostsSearch = ({ searchParams, setSearchParams }) => {
    const [search, setStateSearch] = useState(searchParams || '');

    function handelSubmit(event) {
        event.preventDefault();
        const query = event.target.search.value;
        let params = '';
        if (query.length) params = query;
        setSearchParams(params);
    }

    function clearSearch() {
        setStateSearch('');
    }

    return (
        <Form onSubmit={handelSubmit}>
            <Row xs={1} md={2} className="row-gap-3">
                <Col>
                    <Row xs={2} >
                        <Col xs={10}>
                            <Form.Control type="text" name="search" value={search} onChange={e => setStateSearch(e.target.value)} placeholder="Поиск по заголовку" />
                        </Col>
                        <Col xs={1}>
                            {
                                search &&
                                <CloseButton onClick={() => clearSearch()} />
                            }
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Найти
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
