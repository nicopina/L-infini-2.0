import { Card, CardContent , Typography } from "@mui/material"

function RegisterPage () {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Register
                </Typography>
                <form>
                    <label htmlFor="rut"> Rut: </label>
                    <input type="text" name="rut" />
                    <label htmlFor="password"> Constraseña: </label>
                    <input type="password" name="password" />
                    <label htmlFor="password2"> Repetir Constraseña: </label>
                    <input type="password" name="password2" />
                    <input type="button" value="Registrarse" />
                </form>
            </CardContent>
        </Card>

    )
}

export default RegisterPage