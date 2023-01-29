//this file has a dependance on package-templete.js
//and it's nested with that fils

 const fs  = require('fs')
const generatePage = require('./src/page-template.js')
const {writeFile, copyFile} = require('./utils/generate-site.js')

const inquirer = require('inquirer');



// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const pageHTML =  generatePage(name, github)
const promptUser = () =>{ 

  

return inquirer.prompt([ 
    
    { 
      type: 'input', 
      name: 'name',
      message: 'What is your name?(require)',

      validate: nameInput =>{
        if (nameInput){
            return true;
        }else{
            console.log('Please input your name!')
             return false
        }
      }
    },
    
    { 
        type: 'input', 
        name: 'githubUserName',
        message: 'Enter your github user name(require)',
        
        validate: githubNameInput =>{
            if (githubNameInput){
                return true;
            }else{
                console.log('Please input your github name!')
                 return false
            }
      },

    },
    {
        type: 'confirm', 
        name: 'confirmAbout',
        message: 'would you like to enter some information about your self for an "About" section?',
        default : true 
    },
    
    { 
        type: 'input', 
        name: 'about',
        message: 'Provide some information about yourself',

        when: ({confirmAbout}) => {
            if (confirmAbout){
                return true;
            }
            else{
                return false;
            }
        }
      },
])
}




// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const pageHTML =  generatePage(name, github)
const promptProject = portfolioData =>{ 

    console.log(`
    ==================
    Add a new Project
    ==================
    `)
    if(!portfolioData.projects){
        portfolioData.projects =[]
    }

return inquirer.prompt([ 
    
    { 
      type: 'input', 
      name: 'projectName',
      message: 'What is the name of your project? (require)',
      
      validate: projectNameInput =>{
        if (projectNameInput){
            return true;
        }else{
            console.log('Please input your project name!')
             return false
        }
    },
    },
    { 
        type: 'input', 
        name: 'description',
        message: 'Provide a description for the project (required)',
        
        validate: descriptionInput =>{
            if (descriptionInput){
                return true;
            }else{
                console.log('Please input your description!')
                 return false
            }
      }
      },
      { 
        type: 'checkbox', 
        name: 'languages',
        message: 'What did you build this project with? (check all the apply)',
        choices: ['Javascript', 'HTML','CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      { 
        type: 'input', 
        name: 'link',
        message: ['Enter the github link for your project(required)'],

        validate: linkInput =>{
            if (linkInput){
                return true;
            }else{
                console.log('Please input your github link!')
                 return false
            }
      }

      },
      { 
        type: 'confirm', 
        name: 'feature',
        message: ['Would you like to feature this project?'],

        default: false
      },
      { 
        type: 'confirm', 
        name: 'confirmAddproject',
        message: ['Would you like to enter another project?'],

        default: false
      }
])


.then(projectData =>{
    
    portfolioData.projects.push(projectData)

    if (projectData.confirmAddproject){
        return promptProject(portfolioData);
    }else{
        return portfolioData;
    }
})
}
promptUser()
.then(promptProject) 
.then(portfolioData => { 
 return generatePage(portfolioData)
})
.then(pageHTML => {
    return writeFile(pageHTML)
})
.then (writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile;
})
.catch (err => {
 console.log(err);
});








// console.log(inquirer);


