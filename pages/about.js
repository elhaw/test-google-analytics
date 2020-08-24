import Link from 'next/link'

export default function About() {
    return (
        <div>
            <nav style = {{display:"flex"}}>
                <Link href = '/' >
                    Home
                </Link>
                <Link href = '/contact' >
                    contact
                </Link>
            </nav>
          <section>
            <h1>contact us</h1>;
          </section>
        </div>
      );
  }
  