import { ProjectReflection } from 'typedoc';
import { MarkdownTheme } from '../../src';

describe(`Output File Strategy`, () => {
  let project: ProjectReflection;
  let theme: MarkdownTheme;

  describe(`fileStructure`, () => {
    test(`should compile default structure'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: {} },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should compile default structure with '--symbolsWithOwnFile none`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        {
          options: { symbolsWithOwnFile: 'none' },
        },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should compile '--fileStructure 'modules'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { fileStructure: 'modules' } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should compile '--fileStructure modules --symbolsWithOwnFile  none'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        {
          options: { symbolsWithOwnFile: 'none', fileStructure: 'modules' },
        },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });
  });

  describe(`symbolsWithOwnFile`, () => {
    test(`should set default symbolsWithOwnFile (all)'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { symbolsWithOwnFile: 'all' } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should set --symbolsWithOwnFile none'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { symbolsWithOwnFile: 'none' } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should --symbolsWithOwnFile [class]'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { symbolsWithOwnFile: ['class'] } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should --symbolsWithOwnFile [class, interface]'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { symbolsWithOwnFile: ['class', 'interface'] } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });

    test(`should set symbolsWithOwnFile [enum, types, variables]'`, async () => {
      ({ project, theme } = await global.bootstrap(
        ['modules/module-1', 'modules/module-2'],
        { options: { symbolsWithOwnFile: ['enum', 'type', 'var'] } },
      ));
      expect(theme.getUrls(project).map((url) => url.url)).toMatchSnapshot();
    });
  });
});
