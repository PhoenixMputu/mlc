import Header from "../components/Header"
import '../css/admin.scss'

const AddEvent = () => {
    return (
        <>
            <Header/>
            <form id="formulaire">
                <h2>Ajouter un événement</h2>
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input type="text" className="form-control" id="title" placeholder="Titre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Image</label>
                    <input type="file" className="form-control" id="title" placeholder="Titre"/>
                </div>
                <div className="flex">
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" placeholder="Date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Heure</label>
                        <input type="time" className="form-control" id="time" placeholder="Heure"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Description"></textarea>
                </div>
                <input type="submit" value="Ajouter l'événement" />
            </form>
        </>
    )
}

export default AddEvent;