import Footer from '.'
import Icon from '../icons'

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
                <Footer.Row />
                    <Footer.Team>Dev Team: Jerry, Kaiwen, Liuhao, Orion, Sunrise from UCSB CS148 Spring 2021 <Footer.Link href="https://github.com/ucsb-cs148-s21/1pm-t2-food-bank"><Icon className="fab fa-github" /></Footer.Link></Footer.Team>
            </Footer.Wrapper>
        </Footer>
    )
}