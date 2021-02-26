# GEHC Alert Notification

using Angular11<br/>
By James Wang

<article class="markdown-body entry-content container-lg" itemprop="text">
	<h1><a id="user-content-sb-admin-angular" class="anchor" aria-hidden="true"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Regions and Countries Angular</h1>
	<p>GEHC Alert Notification Angular is a free and open-sourced Bootstrap themed Angular 9 project.</p>
	<p>GEHC Alert Notification Angular comes with a base implementation of dropdowns and tables.</p>
	<h2><a id="user-content-quick-start" class="anchor" aria-hidden="true" href="#quick-start"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Quick Start</h2>
	<div class="highlight highlight-source-shell"><pre>git clone https://github.com/specter01wj/Regions_Countries_Angular.git
	<span class="pl-c1">cd</span> Regions_Countries_Angular
	npm install
	npm start</pre></div>
	<p><code>npm start</code> should open a browser window to <a href="http://localhost:4200" rel="nofollow">http://localhost:4200</a></p>
	<p>By default angular runs on port 4200. To change this port you can run:</p>
	<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> This starts the development server on port 4205,</span>
	<span class="pl-c"><span class="pl-c">#</span> but you can use any port you'd like</span>
	<span class="pl-k">export</span> PORT=4205 <span class="pl-k">&amp;&amp;</span> npm start</pre></div>
	<h2><a id="user-content-tests" class="anchor" aria-hidden="true" href="#tests"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Tests</h2>
	<h3><a id="user-content-unit-tests" class="anchor" aria-hidden="true" href="#unit-tests"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Unit Tests</h3>
	<div class="highlight highlight-source-shell"><pre>npm run <span class="pl-c1">test</span></pre></div>
	<h3><a id="user-content-e2e" class="anchor" aria-hidden="true" href="#e2e"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>e2e</h3>
	<div class="highlight highlight-source-shell"><pre>npm run e2e</pre></div>
	<h2><a id="user-content-production" class="anchor" aria-hidden="true" href="#production"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Production</h2>
	<p>Regions and Countries Angular come with a production ready Dockerfile and build scripts.</p>
	<p>You can get Docker <a href="https://www.docker.com/get-started" rel="nofollow">here</a></p>
	<div class="highlight highlight-source-shell"><pre>npm run docker:build
	npm run docker:run</pre></div>
	<h2><a id="user-content-generate-code" class="anchor" aria-hidden="true" href="#generate-code"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Generate Code</h2>
	<div class="highlight highlight-source-shell"><pre>npm run generate:module -- --path src/modules --name Test
	npm run generate:component -- --path src/modules/test/containers --name Test
	npm run generate:component -- --path src/modules/test/components --name Test
	npm run generate:directive -- --path src/modules/test/directives --name Test
	npm run generate:service -- --path src/modules/test/services --name Test</pre></div>
	<p><em>Note: Creating a Component and a Container use the same command,
	the difference is just the paths and how they are used.</em></p>
	<h3><a id="user-content-mvcc" class="anchor" aria-hidden="true" href="#mvcc"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>MVCC</h3>
	<p>Containers and Components are both Angular Components, but used in different ways.</p>
	<p>Containers should arrange Components.</p>
	<p>Obviously this can become subjective, but MVCC is the paradigm that we subscribe to.</p>
	<h2><a id="user-content-troubleshooting" class="anchor" aria-hidden="true" href="#troubleshooting"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>Troubleshooting</h2>
	<h3><a id="user-content-npm-start" class="anchor" aria-hidden="true" href="#npm-start"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"></svg></a>npm start</h3>
	<p>If you receive memory issues adjust
	<code>max_old_space_size</code> in the <code>ng</code> command of the <code>package.json</code>:</p>
	<div class="highlight highlight-source-json"><pre><span class="pl-s"><span class="pl-pds">"</span>ng<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>cross-env NODE_OPTIONS=--max_old_space_size=2048 ./node_modules/.bin/ng<span class="pl-pds">"</span></span>,</pre></div>
	<p>You can adjust 2048 to any number you need.</p>
	<p>For more information about why you may need <code>--max_old_space_size</code>
	see <a href="https://medium.com/@ashleydavis75/node-js-memory-limitations-30d3fe2664c0" rel="nofollow">this article</a>.</p>
	<p>Keep in mind that this project only uses node to build the angular application.
	There is no production dependency on node.</p>
</article>