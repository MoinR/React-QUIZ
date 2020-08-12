import React from 'react';
import Loader from './loader';

export default class CaseData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
        }
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://corona.lmao.ninja/v2/countries');
        const results = await response.json();

        const newres = results.map(this.countries);

        // Sort the data by total cases 
        newres.sort((a, b) => {
            return b.cases - a.cases;
        });

        // Update the state 
        this.setState({
            data: newres,
            isLoading: false
        });

    }

    countries = countryData => ({
        countryName: countryData.country,
        cases: countryData.cases,
        todayCases: countryData.todayCases,
        recovered: countryData.recovered,
        deaths: countryData.deaths,
    });

    render() {
        return (
            <div className="App">
                {(this.state.isLoading) ? <Loader className="align-middle" /> :
                    <div className=" w-75 mx-auto mt-5 " >
                        <table id="covid-data" className="table table-dark text-center table-bordered table-responsive-sm ">
                            <thead>
                                <tr className="table-active">
                                    <th className=""> Country </th>
                                    <th className=""> Total cases </th>
                                    <th className=""> New cases </th>
                                    <th className=""> Total recovered </th>
                                    <th className=""> Total deaths </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(item =>
                                    <tr key={item.countryName}>
                                        <td>  {item.countryName}</td>
                                        <td>  {item.cases}</td>
                                        <td>  {item.todayCases}</td>
                                        <td>  {item.recovered}</td>
                                        <td>  {item.deaths}</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div> }
            </div>
        )
    }
}