// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string; // The username of the GitHub user
    id: number; // The unique identifier for the user
    avatar_url: string; // The URL of the user's avatar
    html_url: string; // The URL to the user's GitHub profile
    name?: string; // The user's name (optional)
    company?: string; // The user's company (optional)
    blog?: string; // The user's blog or website (optional)
    location?: string; // The user's location (optional)
    email?: string; // The user's email address (optional)
    bio?: string; // The user's bio (optional)
  }

  export default Candidate;