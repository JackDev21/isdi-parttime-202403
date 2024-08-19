import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Header from "../Header"
import Main from "../core/Main"
import Footer from "../core/Footer"

import useContext from "../../useContext"
import { SystemError } from "com/errors"

import { GoNote } from "react-icons/go"

import logic from "../../logic"

import "./DeliveryNotesList.css"

export default function DeliveryNoteList() {
  const { alert } = useContext()

  const [deliveryNotes, setDeliveryNotes] = useState([])

  useEffect(() => {
    try {
      //prettier-ignore
      logic
        .getAllDeliveryNotes()
        .then((deliveryNotes) => {
          setDeliveryNotes(deliveryNotes)
        })
        .catch((error) => {
          if (error instanceof SystemError) {
            alert(error.message)
          }
          alert("No hay Albaranes para este cliente")
        })
    } catch (error) {
      alert(error.message)
    }
  }, [])

  return (
    <>
      <Header iconUser={<GoNote />}>Albaranes</Header>
      <Main>
        <ul className="DeliveryList">
          {deliveryNotes.map((deliveryNote) => (
            <Link className="DeliveryLink" to={`/delivery-notes/${deliveryNote.id}`} key={deliveryNote.id}>
              <li className="DeliveryNote">
                {deliveryNote?.number && <p>A/Nº: {deliveryNote.number}</p>}
                {deliveryNote?.customer && <p>&nbsp;{deliveryNote.customerName}</p>}
              </li>
            </Link>
          ))}
        </ul>
      </Main>
      <Footer>FactuClient</Footer>
    </>
  )
}