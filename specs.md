## Planning

- Brainstorm the problem that you want your application to solve. It's okay to take inspiration for the features you want to build from other sites or projects you've seen (it's not okay to use their code though).
    The problem: when you live with someone else, there are inevitably times when something gets put away - maybe where it shouldn't go - and then gets forgotten until someone tries to find it.  "WhereInTheHouse" is an application where multiple users in a househould can record the description or the actual identity of something they find as well as where it gets put so everyone in the house can find it when they are looking for it.
- Plan what features your app will have. You can write **User Stories** to help make it clear what you are planning to build.
    - a User can create an account
    - the first user also creates the household
    - additional users can be added to the household
    - there is a view to browse the items that have been recorded
    - there is a view to record an item that is being put away
    - there is a view to search for an item that has been put away
- Model your domain. You need to know what the nouns in your project are - the objects in the 'world' of your application. It can be helpful to draw the relationships between your models.
    - User has a username and password
    - Item has a name, description, current_location and proper_location
    - Household is a collection of users and items 
    - household_users will join users to households
- Plan how your features will work.

## Services setup
**Create rails api app:**
    rails new where-in-the-house-api --api --database=postgresql
    create backend dir and move all app files into
    create frontend dir and setup index.html and js files
**Setup Repo and initial commit**
    create repo at github.com
    git remote add origin git@github.com:roadpilot/where-in-the-house.git
    git branch -M main
    git push -u origin main
**Setup PostgreSQL**
    sudo apt-get install postgresql
    sudo service postgresql start (sudo service postgresql stop to stop)
    sudo -u postgres createuser --superuser term
    rake db:setup

## Domain Modeling

As you turn your user stories into more clear technical specifications for features, you can start by modeling the data that your application will store and show. Identify the nouns in your stories, their properties, and their relationships.
    - User
        has_many :household_users
        has_many :households, through: :household_users
        has_secure_password
    - Item has a name, description, current_location and proper_location
        belongs_to :household
    - Household is a collection of users and items
        has_many :items 
        has_many :household_users
        has_many :users, through: :household_users
    - household_users will join users to households
        belongs_to :user
        belongs_to :household

Later on, you will be ready to create the database schema and application models corresponding to this domain.

## Build resources
rails g resource User username:string password_digest:string --no-test-framework
    seeds
    test in console
rails g resource Household user_id:integer --no-test-framework
    seeds
    test in console
rails g resource Item name:string description:string current_location:string proper_location:string household_id:integer last_update_user_id:integer --no-test-framework
rails g resource household_user user_id:integer household_id:integer --no-test-framework


## MVP ASAP
(Minimum Viable Product, As Soon As Possible)

Instead of getting stuck on advanced features, start with a basic working version of the application, then steadily add features piece by piece.

## Build vertically, not horizontally

- Build the **R** from CRUD for just one model, _vertically!_ That means one migration, one model, one controller action, add seed data and confirm that your code works by testing it visually, then one `fetch` call, and one DOM update. 
- Then, build the next CRUD action (maybe Create or Update), again building **vertically**.
- Continue building features one by one, (_vertically!_)
- Add feature by feature, not model by model or layer by layer.
- Test each feature, add styles, and create seed data as you go (not all at once at the end)


## Rails App with JavaScript Frontend Spec

Project Specs:
Must have a Rails Backend and new requirements implemented through JavaScript.

Makes use of ES6 features as much as possible(e.g Arrow functions, Let & Const, Constructor Functions)

Must translate the JSON responses into Javascript Model Objects using either ES6 class or constructor syntax. 

Must render at least one index page (index resource - 'list of things') via JavaScript and an Active Model Serialization JSON Backend.

Must render at least one show page (show resource - 'one specific thing') via JavaScript and an Active Model Serialization JSON Backend.

Your Rails application must reveal at least one `has-many` relationship through JSON that is then rendered to the page.

Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript.

At least one of the JS Model Objects must have a method on the prototype.

Project Repo Specs:
Read Me file contains:
    Application Description
    Installation guide (e.g. fork and clone repo, migrate db, bundle install, etc)
    Contributors guide (e.g. file an issue, file an issue with a pull request, etc)
    Licensing statement at the bottom (e.g. This project has been licensed under the MIT open source license.)

Repo General
    You have a large number of small Git commits
    Your commit messages are meaningful
    You made the changes in a commit that relate to the commit message
    You don't include changes in a commit that aren't related to the commit message
