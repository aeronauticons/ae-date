import React from 'react'
import { TitleComponent } from '../TitleComponent/TitleComponent'
import { ProjectLists } from './ProjectLists';

export const Projects = ({ openModal }) => {

    return (
        <div
          className="min-h-screen max-w-screen relative isolate px-6 pt-8 lg:px-8 bg-ae_background_color"
          id="project_page"
        >
          <TitleComponent title="Projects" id="project_page" />

          <ProjectLists openModal={openModal}/>
        </div>
      );
}