# Houseasaurus

[houseasaurus.github.io](https://houseasaurus.github.io)

A non-profit housing cooperative in State College, Pennsylvania that strives to promote diversity as well as be environmentally sustainable, socially responsible, queer positive, and egalitarian.

## Maintenance

### Making changes
1. To edit on github, press the pencil icon.
2. After making edits, commit the changes (press the 'Commit changes...' green button), describing what you did in the short message.
3. You will see the changes appear on the site after a while (not immediately). You can clear cache/cookies if you don't see it after a while.

### Instagram post embed
To change out which Instagram post is embedded:
1. Open the post in Instagram.
1. Click the `...` in the upper right corner, and select `Embed`.
1. Copy the embed code.
1. Replace the embed code at `Instagram post embed` in `index.html`. This consists of the `<blockquote>` and `<script>` inside `<div class="pic_post">`. 

### Application form 
To update the application Google form to the current year:
1. Open the google form for the current year.
1. Click the "Send" button on the top right of the form, and go to the `<>` tab.
1. Copy ONLY the `src=` part of the embed HTML. 
1. Replace the `src=` part of the `<iframe>` at `Application` in `index.html`. Comment this section in (remove the `<!-- -->`), also comment in the 'APPLICATIONS OPEN' button.

### If you fucked up
1. Revert the change.
