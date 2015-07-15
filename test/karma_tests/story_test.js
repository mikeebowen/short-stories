var React = require('react/addons');
var Story = require('../../app/js/components/story.jsx');
var TestUtils = React.addons.TestUtils;
var testUtilsAdditions = require('react-testutils-additions');

  describe('Story component', function () {
    var component;

    afterEach(function () {
      // if (component && testUtilsAdditions.isCompositeComponent(component) && component.isMounted()) {
      //   React.unmountComponentAtNode(component.getDOMNode().parent);
      // }
    });

    beforeEach(function () {
      component = TestUtils.renderIntoDocument(React.createElement(Story));
      component.props.data.storyTitle = 'front end test title';
      component.props.data.author = 'front end author';
      component.props.data.storyText = 'front end story text';
      console.log('LLLLLLLLL', component);
    });

    it('should display a story', function () {
      expect(component.props.data).toBeDefined();
      expect(component.props.data.storyTitle).toBeDefined();
      expect(component.props.data.storyTitle).toBe('front end test title');
      expect(component.props.data.author).toBe('front end author');
      expect(component.props.data.storyText).toBe('front end story text')
    });

  });
