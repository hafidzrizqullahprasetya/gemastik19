import React from "react";
import { Composition } from "remotion";
import { Profil60 } from "./Profil60";
import { FPS } from "./theme";

export const Root: React.FC = () => (
  <Composition id="Profil60" component={Profil60} durationInFrames={60 * FPS} fps={FPS} width={1920} height={1080} />
);
