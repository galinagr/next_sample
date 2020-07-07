import Link from "next/link"
import Layout from "../components/Layout"
import Head from "next/head"


const myStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "5px"
}

const About = () => (
    <Layout mainTitle="My Next JS App" footer={`Copyright Galina`}>
        <Head>
            <title>About page</title>
        </Head>
        <h2>About JS</h2>
        <Link href="/">
            <a style={myStyle}>Main page</a>
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Alias assumenda dolorem, doloremque ex excepturi facilis
           iste labore magnam molestiae molestias nulla numquam obcaecati officia praesentium qui tempore, velit,
           voluptatibus. Enim.
           Asperiores aut autem corporis debitis dicta eaque exercitationem harum itaque iusto laudantium libero
           maiores, molestiae
           molestias natus necessitatibus nihil nobis nostrum pariatur quaerat quam quas reprehenderit sapiente totam
           voluptas voluptates!
           A ab aut dolores doloribus exercitationem illo incidunt laborum magnam necessitatibus nemo nihil officia
           pariatur possimus praesentium
           quidem quod, quos reiciendis sapiente soluta tempora totam voluptas voluptatum? Distinctio, hic, minus.
        </p>

        <style jsx>{`
        p {
        color: indigo;
        font-size: 20px;
        }
        `}
        </style>
    </Layout>
)
export default About
