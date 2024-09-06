# EnvyFlix
[![EnvyFlix Image](.github/EnvyFlix.png)](https://envyflix.xyz)  

## Envyflix is a fork of [sudo-flix](https://github.com/sussy-code/smov) with many QoL changes and new features. 

#####  I created this fork to solve my peronal problems with sudo-flix as well as solve other user's issues. As this is just a fork, all docs (and proceding content here) are for sudo-flix. 
If you would like to learn more about the features and changes I have made to EnvyFlix or want to send feedback, join the [EnvyFlix Discord](https://discord.gg/7z6znYgrTG).

**I *do not* endorse piracy of any kind I simply enjoy programming and large user counts.**

---

## Links And Resources (sudo-flix ⬇)
| Service        | Link                                                             | Source Code                                              |
|----------------|------------------------------------------------------------------|----------------------------------------------------------|
| Sudo-Flix Docs | [sudo-docs](https://docs.undi.rest)                          | [source code](https://github.com/sussy-code/docs)        |
| Extension      | [extension](https://docs.undi.rest/extension)                | [source code](https://github.com/sussy-code/browser-ext) |
| Proxy          | [sudo-proxy](https://sudo-proxy.up.railway.app)              | [source code](https://github.com/sussy-code/sudo-proxy)  |             
| Backend        | [sudo-backend](https://backend.undi.rest)                    | [source code](https://github.com/sussy-code/backend)     |
| Frontend       | [sudo-flix](https://docs.undi.rest/instances)                | [source code](https://github.com/sussy-code/smov)        |
| Weblate        | [sudo-weblate](https://docs.undi.rest/links/weblate)         | [source code](https://github.com/sussy-code/docs)        |

***I provide these if you are not able to host yourself, though I do encourage hosting the frontend.***


## Running Locally
Type the following commands into your terminal / command line to run Sudo-Flix locally
```bash
git clone https://github.com/sussy-code/smov.git
cd smov
git pull
pnpm install
pnpm run dev
```
Then you can visit the local instance [here](http://localhost:5173) or, at local host on port 5173.


## Updating a sudo-flix Instance
To update a sudo-flix instance you can type the below commands into a terminal at the root of your project.
```bash
git remote add upstream https://github.com/sussy-code/smov.git
git fetch upstream # Grab the contents of the new remote source
git checkout <YOUR_MAIN_BRANCH>  # Most likely this would be `origin/main`
git merge upstream/main
# * Fix any conflicts present during merge *
git add .  # Add all changes made during merge and conflict fixing
git commit -m "Update sudo-flix instance (merge upstream/main)"
git push  # Push to YOUR repository
```


## Contact Me
EnvyFlix dev:
**Email:** *[contact@envyflix.xyz](mailto:contact@envyflix.xyz)* 

Or sudo-flix dev:
**Email:** *[dev@sudo-flix.lol](mailto:dev@sudo-flix.lol)* 

