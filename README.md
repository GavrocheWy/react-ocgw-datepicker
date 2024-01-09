NodeJS - React - JavaScript - CSS

# Here's a lightweight datepicker plugin with a modern, universal design to integrate into any of your applications!

## Prerequisites
- [NodeJS (version 16.17.0)](https://nodejs.org/en/)
- [NPM (version 9.4.0)](https://www.npmjs.com/)
- [React (version 18.2.0)](https://react.dev/)

## Getting started

### Installation

    npm install @gavrochewy/react-ocgw-datepicker
   
### Basic usage

    import { Datepicker } from "@gavrochewy/react-ocgw-datepicker";
    
    const YourComponent = () => {

      return (
            <Datepicker />;
        )

    };

The "Datepicker" component works without any default properties. If you simply specify `<Datepicker />`, an input will appear on your page and the datepicker will appear when the input is clicked. To retrieve the value returned by the Datepicker, use the `callback` property and specify the callback function you wish to associate with the Datepicker.

    const YourComponent = () => {

        const [myDate, setMyDate] = useState()

        return (
            <Datepicker callback={setMyDate(date)} />;
        )

    };

## Advanced usage

If you wish to restrict the user with a maximum or minimum date, customize the datepicker activation input or set a specific default date, you can do so using the component's advanced properties.
  
### Initial date

Set an initial date with the `initialDate` property, which will be displayed by default in the input and when Datepicker is opened. If you don't set an `initialDate` property in your component, the current date will be used. The `initialDate` property must be a Date object.

    <Datepicker initialDate={new Date(2000-01-01)} />

### Minimum date

The `minDate` property is optional and allows you to define a minimum date not to be exceeded when selecting in Datepicker. By specifying this value, you prevent the selection of dates prior to the one you have defined, thus ensuring that your selections remain in line with your time criteria. The `minDate` property must be a Date object.

    <Datepicker minDate={new Date()} />

### Maximum date

The `maxDate` property is an optional feature that allows you to define a maximum date for the selection in Datepicker. By specifying this value, you avoid the possibility of selecting dates later than the one you've defined, thus ensuring that your selections remain within the time limits you've set. The `maxDate` property must be a Date object.

    <Datepicker maxDate={new Date(2030-01-01)} />

### Input CSS classes

With the `inputClasses`` property, you can define which CSS classes you want to use for the date selection input. Indicate the classes you wish to use in a single line in this form:

    <Datepicker inputClasses={"my-class another-class"} />
    
## Thank you for choosing my Datepicker plugin!

Gavroche Woerly