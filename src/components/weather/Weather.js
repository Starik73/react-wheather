import React from 'react';

// Альтернативный вариант описания класса
const Weather = (props) => (
    <div>
    {
        props.temp && 
        <div className="infoWeather">
            <p className="text-green"><b>Данные о погоде:</b></p>
            <p className="text-white">
                Текущая температура: {props.temp}<br/>
                Восход солнца: {props.sunrise}<br/>
                Закат солнца: {props.sunset}<br/>
                Ощущается, как: {props.feels_like}<br/>
                Город: {props.city_name}<br/>
                Код страны: {props.country_code}<br/>
            </p>
        </div>
    }
    {
        props.error && 
        <p className="error">{props.error}</p>
    }
    </div>
);

// Обычный вариант написания класса
// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//             {
//                 this.props.temp && 
//                 <div>
//                     <p>
//                         Данные о погоде:
//                     </p>
//                     <p>
//                         Текущая температура: {this.props.temp}<br/>
//                         Восход солнца: {this.props.sunrise}<br/>
//                         Закат солнца: {this.props.sunset}<br/>
//                         Ощущается, как: {this.props.feels_like}<br/>
//                         Город: {this.props.city_name}<br/>
//                         Код страны: {this.props.country_code}<br/>
//                     </p>
//                 </div>
//             }
//             {
//                 this.props.error && 
//                 <p>{this.props.error}</p>
//             }
//             </div>
//         );
//     }
// }

export default Weather;