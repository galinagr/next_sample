import Link from "next/link"
import Layout from "../components/Layout"
import Head from "next/head"

const Index = () => (

    <Layout mainTitle="My Next JS App" footer={`Copyright ${new Date().getFullYear()}`}>
        <Head>
            <title>Home page</title>
        </Head>
        <h2>Hello from Next!</h2>
        <Link href="/about">
            <a>About Page</a>
        </Link>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Alias assumenda dolorem, doloremque ex excepturi facilis
           iste labore magnam molestiae molestias nulla numquam obcaecati officia praesentium qui tempore, velit,
           voluptatibus. Enim.
           Asperiores aut autem corporis debitis dicta eaque exercitationem harum itaque iusto laudantium libero
        </p>
    </Layout>

)

export default Index
