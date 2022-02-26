# What is the MealApp?

The MealApp is a web application that has amazing recipies you can follow to cook your own meals!

## Tech Stack

- **React.js** - My favourite library for front-end
- **Next.js** - Used this here as a personal preference; helps with dynamic routing & images
- **TypeScript** & **ESLint** - Used for their mutual help with easily defining proptypes, awesome intellisense & reducing bugs right from the get go
- **NProgress** - Awesome progress bar at the top supposed to impress the interviewer
- **Axios** - You know axios? The fancier version of fetch() as I call it
- **TailwindCSS** - This is just an amazing library to have an awesome design pretty fast
- **PostCSS** - It came with TailwindCSS, however it's capabilities are not being used yet
- **Sharp** - Helps increase web performance by optimizing images which this application heavily relies on
- **Prettier** - Well, it makes code pretty

## Component Design Decisions

All components have been designed to retrieve and validate props with `TypeScript` if applicable.

All components have variable names that follow a easily-readble naming pattern to make them `self-commenting`. Comments are also provided where the logic is complex.

So far, there are two types of components in the application
- UI components which can easily be reused. These components do only one job and they do it well. Examples include `PageHeading`, `YTEmbed`, `MealCard` etc. Props are placed in the same file as the component as the application logic is not complex yet.
- Page components which store logic of a particular page. This has been done to increase code readability, however, this approach can be re-thought in the future.

## Folder Structure

- Any reusable `Types` have been stored in the `/types/` folder & follow this naming convention: /types/<PageName>.tsx
- All reusable UI Components have been stored in the `/components/ui/` folder
- To increase code readability, `render` logic of Pages has been stored as components in the `/components/pages/` folder & follow follow this naming convention `/Render<PageName>.tsx`
- All pages are stored in the `/pages/` folder and has subfolders that correspond to a particular functionality (eg `category`, `meal`) which is scalable

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

## Mobile Test
The application is responsive and has been manually tested to run on mobile devices on a mobile phone along with automated testing using Chrome Dev Tools.
  
<img width="292" alt="Screen Shot 2022-02-26 at 9 57 43 PM" src="https://user-images.githubusercontent.com/53837292/155850880-f653a61d-8e91-419d-a5fb-29780f8f7879.png">

## Type-Checking & Validation
The app has been tested for type errors using TypeScript & ESLint. Further testing can be done using other React Testing tools like Jest.

## Accesibility Test
The app has been tested for accessibility with WAVE chrome plugin & Chrome Lighthouse. WAVE showed no errors or serious warnings and Chrome Lighthouse showed an accessibility score of 98.
  
<img width="359" alt="Screen Shot 2022-02-26 at 11 02 04 PM" src="https://user-images.githubusercontent.com/53837292/155853239-4280143b-6d0c-48bb-9124-02265de93ca4.png">
  
The application can also correctly use Tab sequences for navigation with a keyboard.
  
<img width="500" alt="Screen Shot 2022-02-26 at 9 31 16 PM" src="https://user-images.githubusercontent.com/53837292/155850015-58157ed7-08d5-406b-8a46-c3046d371058.png">

## Performance Testing
The application so far has been written with best practices for React. The application scored a Performance score of 89 in Chrome Lighthouse.
  
  <img width="515" alt="Screen Shot 2022-02-26 at 11 03 30 PM" src="https://user-images.githubusercontent.com/53837292/155853229-704caabb-44a0-4a06-a191-fe62ed59088b.png">

# What would I do if this app was destined for Production?

- Adding more features like Recipie Search, Filter by Country, Sorting etc. by using rest of TheMealDB API
- More specific Error Handling i.e. 404 Error, Server Timeout, Category not found, Meal not found etc.
- Using more mobile-friendly TailwindCSS classes
- Writing reuseable logic for fetching data from API; maybe write custom hooks
- Use **Storybook** for easily documenting and testing components since more features means more components
- Use SEO best practices like using `meta` tags
- More thorough testing using **Zest**, **React-Testing-Library**
- More rigrous accessibility testing with different plugins since some have different algorithms
- Increase performance by using cache, webpack etc.
- Working on the compromises below:

# Compromises made due to Time Constraints
- Showing Ingredients & other information on the Meal page
- Make more reusable components from the Meal page i.e. reusable lists & sections
- The API data is not clean, I could have written logic for extracting intructions from all types of data. See below: <img width="500" alt="Screen Shot 2022-02-26 at 9 17 50 PM" src="https://user-images.githubusercontent.com/53837292/155849535-f75de586-9d92-4896-aecc-408d7029629b.png">
- Writing better logic for extracting excerpts i.e. not finishing on spaces or extracting only sentences; need to think more about this<img width="517" alt="Screen Shot 2022-02-26 at 9 20 06 PM" src="https://user-images.githubusercontent.com/53837292/155849596-5e43abca-0896-49b0-9dfd-625b012916c9.png">
- More thorough type & component testing using **Zest**, **React-Testing-Library**

- Just doing a much better job since **good things take more time & effort**
