import { useState } from "react"
import { Link } from "react-router-dom"

import logic from "../../logic/index"

import { FaUserEdit } from "react-icons/fa"
import { IoListOutline } from "react-icons/io5"
import { LiaFileInvoiceSolid } from "react-icons/lia"
import { GoNote } from "react-icons/go"
import { GiPapers } from "react-icons/gi"

import Button from "../core/Button"
import Footer from "../core/Footer"
import Header from "../Header"

import "./Home.css"
import { useEffect } from "react"

export default function Home() {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    try {
      //prettier-ignore
      logic.getUserName()
        .then((userName) => {
          setUserName(userName)
        })
        .catch((error) => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  return (
    <>
      <Header iconUser={<FaUserEdit />}>{userName}</Header>

      <main className="Home">
        <Link to="/customers">
          <Button>
            <span className="Icon">
              <IoListOutline />
            </span>
            Listado Clientes
          </Button>
        </Link>

        <Link to="lastInvoices">
          <Button>
            <span className="Icon">
              <GiPapers />
            </span>
            Ultimas Facturas
          </Button>
        </Link>

        <Link to="createDelivery">
          <Button>
            <span className="Icon">
              <GoNote />
            </span>
            Crear Albarán
          </Button>
        </Link>

        <Link>
          <Button>
            <span className="Icon">
              <LiaFileInvoiceSolid />{" "}
            </span>
            Crear Factura
          </Button>
        </Link>
      </main>

      <div className="ContainerFooter">
        <Footer>FactuClient</Footer>
      </div>
    </>
  )
}