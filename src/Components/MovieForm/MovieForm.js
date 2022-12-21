import React, { useState } from "react";
import { createCardOnTrello, populateCardOnTrello } from "../../service/trello";
import loader from "../../images/loader.gif";
import { Form, Button, Image } from "react-bootstrap";
import ToastComponent from "../ToastComponent/ToastComponent";

const MovieForm = (props) => {
    //form input states
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [isLoading, setLoading] = useState(false);

    //toast states
    let [toast, setToast] = useState(false);
    const toggleShowToast = () => setToast(!toast);

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies();
    };

    const getMovies = async () => {
        //create a card
        setLoading(true);
        try {
            const createCard = await createCardOnTrello();
            //get and set the id of the newly created card

            let array = [process.env.REACT_APP_TRELLO_FIRSTNAME,
            process.env.REACT_APP_TRELLO_SURNAME,
            process.env.REACT_APP_TRELLO_EMAIL, process.env.REACT_APP_TRELLO_PHONE, process.env.REACT_APP_TRELLO_MOVIE];

            for (let i = 0; i < array.length; i++) {

                if (array[i] === process.env.REACT_APP_TRELLO_FIRSTNAME) {
                    populateTrello(createCard.data.id, process.env.REACT_APP_TRELLO_FIRSTNAME, name)
                }
                if (array[i] === process.env.REACT_APP_TRELLO_SURNAME) {
                    populateTrello(createCard.data.id, process.env.REACT_APP_TRELLO_SURNAME, surname)
                }
                if (array[i] === process.env.REACT_APP_TRELLO_EMAIL) {
                    populateTrello(createCard.data.id, process.env.REACT_APP_TRELLO_EMAIL, email)
                }
                if (array[i] === process.env.REACT_APP_TRELLO_PHONE) {
                    populateTrello(createCard.data.id, process.env.REACT_APP_TRELLO_PHONE, phone)

                }
                if (array[i] === process.env.REACT_APP_TRELLO_MOVIE) {
                    populateTrello(createCard.data.id, process.env.REACT_APP_TRELLO_MOVIE, props.movieDetails.title)
                }

            }

        } catch (e) {
            console.log(e);
        }
        setLoading(false);
        setToast(true);
    };

    const populateTrello = async (id, data, dataValue) => {
        await populateCardOnTrello(
            id,
            data,
            {
                text: dataValue
            }
        );
    }

    return (<div>
        <div>{isLoading ? <Image className="loader" src={loader} /> : null}</div>
        <div className="form-content">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="surname">
                    <Form.Control
                        type="text"
                        placeholder="Surname"
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email_Address">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Control
                        type="text"
                        placeholder="Phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button className="w-100" variant="success" type="submit">
                    Get Movie
                </Button>
            </Form>
        </div>
        <ToastComponent toast={toast} toggleShowToast={toggleShowToast}
            message={"Your request was submitted successfully"} >
        </ToastComponent>
    </div>)
}

export default MovieForm;