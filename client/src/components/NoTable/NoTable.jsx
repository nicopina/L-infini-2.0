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
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sin mesa asignada
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Escanee el codigo QR para asignar una mesa <3"}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default NoTable;

