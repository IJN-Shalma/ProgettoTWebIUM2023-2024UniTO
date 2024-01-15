import Breadcrumb from "../components/Breadcrumb";
import LeaguesLeagueList from "../components/LeaguesLeagueCardList";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../components/Loading";

/**
 * Leagues page
 * Lists all competitions, allowing the user to filter by country
 * @state filters - List of countries fetched from database
 * @state activeFilter - Name of the country selected
 */
function Leagues() {
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("");

    const handleFilter = (val) =>{
        setActiveFilter(val);
    }

    useEffect(()=>{
        axios.get("/sql/competitions/countries")
            .then((response) => {
                setFilters(response.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <Breadcrumb/>
            <div className="container">
                <div className="box-shadow rounded-1 mb-3">
                    <h1 className="p-3">International Cups</h1>
                    <div className="d-lg-flex flex-wrap">
                        <LeaguesLeagueList query="/sql/competitions/international" filter={""}/>
                    </div>
                </div>

                <div className="container d-lg-flex flex-column box-shadow rounded-1 p-3 mb-3">
                    <div>
                        <h1>National Leagues</h1>
                    </div>
                    <div className="d-lg-flex flex-row p-3 mb-2 justify-content-around">
                        <div className="p-3 mt-3">
                            <h2>Filter</h2>
                            <ul className="filter-list">
                                {
                                    loading
                                        ? <Loading/>
                                        :
                                        <>
                                        {
                                            filters.map((val, i) =>
                                                    <li onClick={()=>handleFilter(val.countryName)} value={val.countryName} key={i}>{val.countryName}</li>
                                                )
                                        }
                                            <li onClick={()=>handleFilter("")} value={""}>Reset</li>
                                        </>
                                }
                            </ul>
                        </div>

                        <div className="p-3 align-items-start justify-content-around flex-grow-1 d-flex flex-wrap ">
                            <LeaguesLeagueList query={"/sql/competitions/domestic"} filter={activeFilter}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leagues;