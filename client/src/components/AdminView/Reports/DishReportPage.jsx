import TopNLeastSelled from "./TopNLeastSelled";
import TopNMostSelled from "./TopNMostSelled";

function DishReportPage(){
    return (
        <div>
            <h1>Reporte de los platos</h1>
            <TopNMostSelled/>
            <TopNLeastSelled/>
        </div>
    )
}

export default DishReportPage;
