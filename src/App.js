import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import React from 'react';
import Info from './components/weather/Info';
import FormCity from './components/weather/FormCity';
import Weather from './components/weather/Weather';
import Header from './components/Header';
import Footer from './components/Footer';
// Consts
const API_WEATHER_KEY = 'f8fffe4f593fc3c6aca57d22c80bbf1b';

class App extends React.Component {

    state = {
        temp: undefined,
        sunset: undefined,
        sunrize: undefined,
        feels_like: undefined,
        city_name: undefined,
        country_code: undefined,
        error: undefined
    }

    convertTimeStampToDate = (timeStamp) => {
        const dateVal = new Date(timeStamp*1000).toLocaleTimeString('en-EN');
        return dateVal;
    }

    gettingWeather = async (e) => {
        e.preventDefault();

        if (e.target.elements.cityName.value) {
            const cityName = e.target.elements.cityName.value;
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_WEATHER_KEY}&units=metric`);
            const data = await api_url.json();
            if (data.main.temp) {
                console.log(data.main.feels_like);
                this.setState({
                    temp: data.main.temp,
                    sunset: this.convertTimeStampToDate(data.sys.sunset),
                    sunrise: this.convertTimeStampToDate(data.sys.sunrise),
                    city_name: data.name,
                    country_code: data.sys.country,
                    feels_like: data.main.feels_like,
                    error: undefined
                })
            } else {
                this.setState({
                    temp: undefined,
                    sunset: undefined,
                    sunrize: undefined,
                    feels_like: undefined,
                    city_name: undefined,
                    country_code: undefined,
                    error: 'Сервис временно недоступен'
                })
            }
            
        } else {
            this.setState({
                temp: undefined,
                sunset: undefined,
                sunrize: undefined,
                feels_like: undefined,
                city_name: undefined,
                country_code: undefined,
                error: 'Please enter a city'
            });
        }
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Header />
                </Row>
            </Container>
            <div className="wrapper">
                <div className="main">
                <Container>
                    <Row>
                        <div className="col-md-5 info">
                            <Info />
                        </div>
                        <div className="col-md-7 form">
                            <FormCity weatherMethod={this.gettingWeather}/>
                            <Weather 
                                temp={this.state.temp}
                                sunset={this.state.sunset}
                                sunrise={this.state.sunrise}
                                city_name={this.state.city_name}
                                country_code={this.state.country_code}
                                error={this.state.error}
                                feels_like={this.state.feels_like}
                            />
                        </div>
                    </Row>
                </Container>
                </div>
            </div>
            <Container>
                <Row>
                    <Footer />
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;