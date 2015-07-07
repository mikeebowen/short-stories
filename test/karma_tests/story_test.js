var React = require('react');
var Story = require('../../app/js/components/story.jsx');
var TestUtils = React.addons.TestUtils;
var testUtilsAdditions = require('react-testutils-additions');

  describe('Story component', function () {

    afterEach(function () {
      if (component && testUtilsAdditions.isCompositeComponent(component) && component.isMounted()) {
        React.unmountComponentAtNode(component.getDOMNode().parent);
      }
    });

    beforeEach(function () {
      // component = testUtilsAdditions.renderIntoDocument('<Story />');
      TestUtils.renderIntoDocument(React.createElement('story'));
      component.props.data.storyTitle = 'front end test title';
      component.props.data.author = 'front end author';
      component.props.data.storyText = 'front end story text';
    });

    it('should display a story', function () {
      expect(component.props.data.storyTitle).toBeDefined();
      expect(component.props.data.storyTitle).toBe('front end test title');
    });

  });
