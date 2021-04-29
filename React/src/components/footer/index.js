import React from 'react'
import { Container, Wrapper, Row, Column, Link, Title } from'./styles/footer'

export default function Footer({ children, ...restProps}){
    return <Container{...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({chidren, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({chidren, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({chidren, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({chidren, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({chidren, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}