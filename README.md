# Weather App

A modern weather application built with React that allows users to search and retrieve real-time weather information for cities worldwide.

## 🌟 Features

- **City Weather Search**: Fetch current weather by entering a city name.
- **Real-Time Data**: Provides live weather information including temperature, condition, humidity, and wind speed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Weather Icons**: Displays condition-specific icons for easy recognition.
- **Error Handling**: Shows user-friendly messages for invalid city searches.
- **Loading State**: Visual feedback during data fetching.

## 🚀 Components

### Weather Component
```jsx
- Displays current weather details: temperature, humidity, wind speed, etc.
- Fetches weather data from WeatherAPI.
- Shows loading and error states.
```


## WeatherForm Component
```jsx
- Search input field for city name.
- Handles form submissions.
- Displays weather condition icons.
```
## Footer Component
```jsx
- Simple footer displaying app information or contact details.
```

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/maheshparajuli/series-02.git
cd series-02
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
## 🔧 Usage

### Fetching Weather Data
```jsx
// Example usage of Weather component
<Weather city="Kathmandu" />
```

### Weather Search Form
```jsx
// Example usage of WeatherForm component
<WeatherForm onSearch={(city) => {
  // Handle city weather fetch
}} />
```

## 📝 Props

### Weather Component
```typescript
interface WeatherProps {
  city: string; // The name of the city to fetch weather for
  temperature: string; // The current temperature
  condition: string; // Weather condition description
  humidity: string; // Percentage of humidity
  windSpeed: string; // Wind speed information
}
```

### WeatherForm Component
```typescript
interface WeatherFormProps {
  onSearch: (city: string) => void; // Function to handle weather search
}
```

## 🎨 Styling

The application uses custom CSS for styling. Ensure the following CSS files are included:
- `Weather.css`
- `WeatherForm.css`

 ## 🌐 API Integration

- **API Used**: [WeatherAPI](https://www.weatherapi.com/)
- **Endpoint**: [`https://api.weatherapi.com/v1/current.json`](https://api.weatherapi.com/v1/current.json)
- **Parameters**:
  - `key`: Your WeatherAPI key
  - `q`: The city name
  - Additional parameters can be configured as needed.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
