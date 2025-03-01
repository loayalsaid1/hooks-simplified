import React, { useContext } from 'react';
import { hookContext } from './MainHooksComponent';

export default function HookVideo() {
  const { hookName, videoLink, isCustomHook, documentation, hookBlogArticle } = useContext(hookContext);

  return (
    <section id="video">
      <h5 className="subtitle">📺 Hook Vidoe</h5>
      <p>
        Here is a tutorial explaining the <strong>{hookName}</strong> {isCustomHook && 'among other 4'}
      </p>
      <small>Again... WRITE THE CODE YOURSELF.. Bit by bit untill it's reasonable at your mind... not at one session even..</small>
      <div className="articles">
        {!isCustomHook ? ( 
          <>
            <a href={documentation} target="_blank" rel="noopener noreferrer">The Official Documentation</a>
            <a href={hookBlogArticle} target="_blank" rel="noopener noreferrer">{hookName} Blog Article</a>
          </>
          ) : (
            <a href={'https://blog.webdevsimplified.com/2019-11/how-to-write-custom-hooks/'} target="_blank" rel="noopener noreferrer">Custom Hooks Blog Article</a>
          )
        }
      </div>
      <iframe
        className='hook-video'
        src={`https://www.youtube.com/embed/${new URL(videoLink).searchParams.get('v')}`}
        title={hookName}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}
