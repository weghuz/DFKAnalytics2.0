import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useUser from "../Store/UserStore";
import { Button, Container, Grid, MenuItem, Typography } from "@mui/material";
import Select from "react-dropdown-select";
import { useEffect } from "react";
import { BaseHeroVisibilityModels } from "../Logic/BaseHeroVisibilityModels";

export default function HeroColumnSetups({
  visible,
  visibilityModel,
  setVisibilityModel,
  currentColumnSetup,
  setCurrentColumnSetup,
}) {
  const [setupName, setSetupName] = useState("");
  const [setup, setSetup] = useState([
    {
      value: currentColumnSetup.name,
      label: currentColumnSetup.name,
    },
  ]);
  const removeHeroColumnSetup = useUser((state) => state.removeHeroColumnSetup);
  const savedHeroColumnSetups = useUser((state) => state.savedHeroColumnSetups);
  const saveHeroColumnSetup = useUser((state) => state.saveHeroColumnSetup);
  const CreateColumnPreset = () => {
    saveHeroColumnSetup({ name: setupName, model: visibilityModel });
    setCurrentColumnSetup({ name: setupName, model: visibilityModel });
    setSetup([{ value: setupName, label: setupName }]);
  };
  useEffect(() => {
    let newSetup = savedHeroColumnSetups.find((s) => s.name == setup[0].value);
    setCurrentColumnSetup(newSetup);
    setVisibilityModel(newSetup.model);
  }, [setup]);
  return (
    <Container>
      {visible && (
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12}>
            <label className="font-weight-bold">
              {"Select Column Preset to Display"}
            </label>
            <Select
              clearable={false}
              values={setup}
              options={savedHeroColumnSetups.map((s) => {
                return { value: s.name, label: s.name };
              })}
              placeholder={"Select Column Preset to Display"}
              onChange={(values) => setSetup(values)}
            />
          </Grid>
          <Grid container item xs={12} columnSpacing={2}>
            <Grid item xs={12}>
              <label className="font-weight-bold">
                {"Create Column Preset"}
              </label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                id="setupName"
                size="small"
                label="Column Preset Name"
                value={setupName}
                onChange={(e) =>
                  setSetupName((name) => (name = e.target.value))
                }
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={"success"}
                onClick={CreateColumnPreset}
                disabled={setupName.length == 0}
              >
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={"error"}
                disabled={BaseHeroVisibilityModels.some((s) => {
                  return setup[0].value === s.name;
                })}
                onClick={(e) => {
                  console.log(removeHeroColumnSetup(setup[0].value));
                  setVisibilityModel(BaseHeroVisibilityModels[0].model);
                  setSetup([
                    {
                      value: BaseHeroVisibilityModels[0].name,
                      label: BaseHeroVisibilityModels[0].name,
                    },
                  ]);
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
