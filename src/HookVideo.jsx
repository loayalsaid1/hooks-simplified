import React, { useContext } from 'react';
import { hookContext } from './MainHooksComponent';

export default function HookVideo() {
  const { hookName, videoLink } = useContext(hookContext);

  return (
    <section>
      <h5 className="subtitle">📺 Hook Vidoe</h5>
      <p>
        Here is a tutorial explaining <strong>{hookName}</strong>
      </p>
      <small>Again... WRITE THE CODE YOURSELF.. Bit by bit untill it's reasonable at your mind... not at one session even..</small>
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
