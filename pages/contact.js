import Head from "next/head";
import Container from "../components/container";
import Socials from "../components/socials";
import ContactForm from "../components/contactForm";

const Contact = () => {
    return (
        <div>
            <Container>
                <Head>
                    <title>Tomas Gomez Bermudez | Contact me</title>
                </Head>
                <body>
                    <div>
                        <div className="text">
                            <p>
                                Send an email and follow me on my social media.
                            </p>
                        </div>
                        <ContactForm />
                        <Socials />
                    </div>
                </body>
            </Container>
            <style jsx>{`
                .text p {
                    color: #000000;
                    text-align: center;
                    margin-top: 10%;
                    margin-left: 10%;
                    margin-bottom: 4%;
                    width: 80%;
                    font: 20px bold;
                    font-family: Helvetica;
                }
            `}</style>
        </div>
    );
};
export default Contact;
