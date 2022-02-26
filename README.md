# What is the MealApp?

The MealApp is a web application that has amazing recipies you can follow to cook your own meals!

The following tech stack was used in creating this awesome app.

- **React.js** - My favourite library for front-end
- **Next.js** - Used this here as a personal preference; helps with dynamic routing & images
- **TypeScript** & **ESLint** - Used for their mutual help with easily defining proptypes, awesome intellisense & reducing bugs right from the get go
- **NProgress** - Awesome progress bar at the top supposed to impress the interviewer
- **Axios** - You know axios? The fancier version of fetch() as I call it
- **TailwindCSS** - This is just an amazing library to have an awesome design pretty fast
- **PostCSS** - It came with TailwindCSS, however it's capabilities are not being used yet
- **Sharp** - Helps increase web performance by optimizing images which this application heavily relies on
- **Prettier** - Well, it makes code pretty

# Running the Application

First, install all dependancies

```bash
yarn install
```

Then, run the development version.

First, install all dependancies

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result :)

To build the app, use

```bash
yarn build
```


# Testing the Implementation

## Props Test

## Accesibility Test
I used 
<img width="963" alt="Screen Shot 2022-02-26 at 9 31 16 PM" src="https://user-images.githubusercontent.com/53837292/155850015-58157ed7-08d5-406b-8a46-c3046d371058.png">


## Performance Testing

# What would I do if this app was destined for Production?

- Adding more features like Recipie Search, Filter by Country, Sorting etc. by using rest of TheMealDB API
- More specific Error Handling i.e. 404 Error, Server Timeout, Category not found, Meal not found etc.
- Using more mobile-friendly TailwindCSS classes
- Writing reuseable logic for fetching data from API; maybe write custom hooks
- Use **Storybook** for easily documenting and testing components since more features means more components
- Use SEO best practices like using <meta> tags
- More thorough testing using **Zest**, **React-Testing-Library**
- More rigrous accessibility testing with different plugins since some have different algorithms
- Working on the compromises below:

# Compromises made due to Time Constraints
- Showing Ingredients & other information on the Meal page
- The API data is not clean, I could have written logic for extracting intructions from all types of data. See below: <img width="762" alt="Screen Shot 2022-02-26 at 9 17 50 PM" src="https://user-images.githubusercontent.com/53837292/155849535-f75de586-9d92-4896-aecc-408d7029629b.png">
- Writing better logic for extracting excerpts i.e. not finishing on spaces or extracting only sentences; need to think more about this<img width="517" alt="Screen Shot 2022-02-26 at 9 20 06 PM" src="https://user-images.githubusercontent.com/53837292/155849596-5e43abca-0896-49b0-9dfd-625b012916c9.png">
- More specific Error Handling i.e. 404 Error, Server Timeout, Category not found, Meal not found etc.
- More thorough type & component testing using **Zest**, **React-Testing-Library**
- Just doing a much better job since good things take more time & effort
