# Personal Journal

This is the code for the personal profile/website deployed on the domain [Digital-Madness](https://digital-madness.in). The design itself is inspired from [Brian Lovin's](https://brianlovin.com/) website. If you like the simplicity of my deployment, which majorly maintains a `static website` you can use the code here. But, Brian lovin has added a lot more features to his website, so, feel free to look at his repository for advanced features.

## Deployment

### Setup Development Environment

1. Install Node Version Manager, NVM.
2. Install the node version as mentioned in the `.nvmrc` file. With `nvm` in `bash`, you can do `cat .nvmrc | nvm install`.
3. With node installed, you can use the specific version everytime you enter the directory with `cat .nvmrc | nvm use`
4. Finally, run `npm install` to install all the required dependencies.

### Local Testing

1. Run `npm run dev`, it should start the local dev server and automatically open the browser pointing to the locally deployed website.
2. Make any changes in the website, see changes in the browser.

### Deployment

1. Build the static website with `npm run build`
2. Upload the static website to your server and serve it with any server, like a simple HTTP python server, Apache server, node server, etc.

# Use for your own website

Please fork the website and make it your own after removing all the blogposts or other personal elements here. Don't forget to add a star.
