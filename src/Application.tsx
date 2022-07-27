import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import TaskCard from './components/TaskCard/TaskCard';
import Container from '@mui/material/Container';
import { TaskPriorityEnum } from './Enums';
import BrainDumpCardButtons from './components/BrainDump/BrainDumpTaskButtons';
import BrainDumpBoard from './components/BrainDump/BrainDumpBoard';
import WorkBoard from './components/Work/WorkBoard';
import NonActionableBoard from './components/Work/NonActionableBoard';
export interface IApplicationProps {}

const Application: React.FC<IApplicationProps> = (props) => {
    return (
        <>
            <Container>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<TaskCard id = {0} title={"slkdfjlak jsdf"} description={`a sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa
                         sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa 
                         sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfja
                         s dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas 
                          fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja 
                          slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjl
                          ak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdfa s
                          jdfa sdfjas dfkjsd fja slkdfjlak jsdfa sjdfa sdfjas dfkjsd fja slkdfjlak jsdf`}
                          progress = {50}
                          priority = {TaskPriorityEnum.LOW}
                          quick = {true}
                        //   TaskButtons = {<BrainDumpCardButtons/>}
                          />} />
                        <Route path="braindumpboard">
                            <Route index element={<BrainDumpBoard />} />
                            <Route path=":number" element={<BrainDumpBoard />} />
                        </Route>
                        <Route path="workboard">
                            <Route index element={<WorkBoard />} />
                            <Route path=":number" element={<WorkBoard />} />
                        </Route>
                        <Route path="nonactionable">
                            <Route index element={<NonActionableBoard />} />
                            <Route path=":number" element={<NonActionableBoard />} />
                        </Route>
                        {/* <Route path="test" element={<TestPage />} />
                        <Route path="layout" element={<LayoutComponent />}>
                            <Route index element={<AboutPage />} />
                            <Route path=":number" element={<AboutPage />} />
                        </Route> */}
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    );
};

export default Application;