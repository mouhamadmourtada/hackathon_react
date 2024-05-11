import React, { useEffect } from 'react';
import {Outlet, Link, useNavigate} from "react-router-dom";
import Table from "../../components/Table";
import ActionComponent from '../../components/ActionComponent';
import BreadCrumb from '../../components/BreadCrumb';
import IndiquePage from '../../components/IndiquePage';
import AddButton from '../../components/AddButton';
import useAxios from '../../Hook/useAxios';
import Alert from '../../components/Alert';
import EmptyData from '../../components/EmptyData';
import Loader from '../../components/Loader';

const ListeTodos = () => {

    const navigate = useNavigate()

    const {responseAxios, error, loading, fetchData } = useAxios({
        url : 'http://localhost:8000/api/todos',
        method : "GET",
        // body : null,
        headers : {
            "Content-type" : "application/json"
        }

    }
    )

    useEffect(() => {
        if(responseAxios){
            setDonnees(responseAxios.todos)
        }
    }, [responseAxios])

    const [donnees, setDonnees] = React.useState([])
    useEffect( () => {
        fetchData()
        
    }, [])

    
    const columns2 = [

        {
            id : 1,
            title : "id",
            attribute : "id",
            type : "int"
        },{
            id : 2,
            title : "title",
            attribute : "title",
            type : "string"
        },{
            id : 3,
            title : "description",
            attribute : "description",
            type : "string"
        },{
            id : 4,
            title : "Date créaton",
            attribute : "created_at",
            type : "Date"
        },{
            id : 5,
            title : "date modification",
            attribute : "updated_at",
            type : "Date"
        }
    ]
    
    const data = [
        {
            id: 1,
            title: "Todo 1",
            completed: false,
            description: "Description 1"
        },
        {
            id: 2,
            title: "Todo 2",
            completed: true,
            description: "Description 2"
        },
        {
            id: 3,
            title: "Todo 3",
            completed: false,
            description: "Description 3"
        }
    ]
    
    const actions = [
        {
            name: "view",
            function: (id) => {
                navigate(`/todos/show/${id}`)
                console.log(`/todos/show/${id}`)
                // console.log("view")
            }
        },
        {
            name: "edit",
            function: (id) => {
                // Navigate(`/todos/edit/${id}`)
                navigate(`/todos/edit/${id}`)
                console.log(`/todos/edit/${id}`)
                // console.log('edit')
            }
        },
        {
            name: "delete",
            function: (id) => {
    
                console.log('delete')
            }
        }
    ]

    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        }
    ]

    const goToAddTodo = () => {
        navigate("/todos/create")
    }


    return (
        <div >
            <BreadCrumb links = {links} />
            <div className='flex justify-between py-2'>
                <IndiquePage className={"mt-3"}>Liste des todos</IndiquePage>
                <AddButton onClick={goToAddTodo} >Nouveau Todo</AddButton>
            </div>
            {
                loading && <Loader/>            }
            {
                error && <Alert type={"danger"} text={"Problème au niveau du serveur veuillez vous reconnecter plus tard !"}/>
            }
            {
                !loading && donnees.length !== 0 ?

                <Table columns = {columns2} data = {donnees} actions={actions}/>:
                <EmptyData >pas de todos </EmptyData>

            }
           

           
        </div>
    );
}

export default ListeTodos;



