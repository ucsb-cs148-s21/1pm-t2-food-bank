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
                        <Footer.Link href="https://www.google.com/maps?q=ucsb+food+bank&rlz=1C1GIGM_enUS869US869&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiOksO8wfzwAhV2JTQIHaAsDJUQ_AUoAXoECAEQAw" target="_blank">Outside the Ortega side of the University Center, facing the lagoon.</Footer.Link>
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