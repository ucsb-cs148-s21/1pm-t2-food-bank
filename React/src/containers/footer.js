import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/ucsbasfoodbank"><Icon className="fab fa-facebook-square" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/ucsbasfoodbank/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Where</Footer.Title>
                        <Footer.Link>Outside the Ortega side of the University Center, facing the lagoon.</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Email us at</Footer.Title>
                        <Footer.Link href="mailto: ucsbasfoodbank@as.ucsb.edu">ucsbasfoodbank@as.ucsb.edu</Footer.Link> 
                        <Footer.Link href="mailto: cindyl@as.ucsb.edu">cindyl@as.ucsb.edu</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}