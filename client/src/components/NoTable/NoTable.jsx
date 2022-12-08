import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getTableRequest } from "../../api/tables.api";
import { UserContext } from "../../Context/UserContext";

function NoTable() {


  return (
    <div style={{"display":"flex", "alignItems":"center",'width':"100%","justifyContent":"center"}}>
      <Card sx={{ maxWidth: 845 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image="https://www.bcasual.cl/wp-content/uploads/2020/03/mesa-donatto.jpg"
      />
      <CardContent> 
        <div gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        </div>
        <div variant="body2" color="text.secondary">
           <h3 style={{color:'black',textAlign:'center',}}>Escanear el código Qr de su mesa para visualizar la carta</h3>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default NoTable;

